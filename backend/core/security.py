# core/security.py
from functools import wraps
from flask import request, jsonify, current_app, g
import jwt
from core.database import db


def require_role(allowed_role):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            auth = request.headers.get('Authorization', '')
            if not auth.startswith('Bearer '):
                return jsonify({"error": "Unauthorized"}), 401
            token = auth.split(' ', 1)[1].strip()
            secret = current_app.config.get('SECRET_KEY', 'dev-secret')
            try:
                payload = jwt.decode(token, secret, algorithms=['HS256'])
            except jwt.ExpiredSignatureError:
                return jsonify({"error": "Token expired"}), 401
            except jwt.InvalidTokenError:
                return jsonify({"error": "Invalid token"}), 401

            user_id = payload.get('user_id')
            if not user_id or user_id not in db['users']:
                return jsonify({"error": "Unauthorized"}), 401
            user = db['users'][user_id]

            try:
                g.token_payload = payload
                g.user_id = user_id
                safe_user = dict(user)
                safe_user.pop('password', None)
                g.current_user = safe_user
            except Exception:
                pass

            if user.get('role') != allowed_role:
                return jsonify({"error": "Forbidden: Bạn không có quyền làm việc này"}), 403

            return f(*args, **kwargs)
        return decorated_function
    return decorator
