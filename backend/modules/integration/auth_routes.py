from flask import Blueprint, request, jsonify, current_app
import jwt
from datetime import datetime, timedelta
from core.database import create_user, authenticate, db, get_user_by_email, set_user_role
from core.security import require_role

bp = Blueprint('auth', __name__, url_prefix='/auth')


def _public_user(u: dict) -> dict:
    if not u:
        return None
    return {k: v for k, v in u.items() if k != 'password'}


@bp.route('/register', methods=['POST'])
def register():
    data = request.get_json() or {}
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    if not name or not email or not password:
        return jsonify({'error': 'name, email, password are required'}), 400
    try:
        user = create_user(name=name, email=email, password=password, role='PENDING')
    except ValueError as e:
        return jsonify({'error': str(e)}), 400
    return jsonify({'user': _public_user(user)}), 201


@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json() or {}
    email = data.get('email')
    password = data.get('password')
    if not email or not password:
        return jsonify({'error': 'email and password required'}), 400
    uid = authenticate(email, password)
    if not uid:
        return jsonify({'error': 'Invalid credentials'}), 401
    user = db['users'][uid]
    secret = current_app.config.get('SECRET_KEY', 'dev-secret')
    payload = {
        'user_id': uid,
        'role': user.get('role'),
        'exp': datetime.utcnow() + timedelta(hours=2)
    }
    token = jwt.encode(payload, secret, algorithm='HS256')
    return jsonify({'access_token': token, 'user_id': uid}), 200


@bp.route('/grant-role', methods=['POST'])
@require_role('ADMIN')
def grant_role():
    data = request.get_json() or {}
    user_id = data.get('user_id')
    role = data.get('role')
    if not user_id or not role:
        return jsonify({'error': 'user_id and role required'}), 400
    ok = set_user_role(user_id, role)
    if not ok:
        return jsonify({'error': 'User not found'}), 404
    return jsonify({'user': _public_user(db['users'][user_id])}), 200


@bp.route('/users', methods=['GET'])
@require_role('ADMIN')
def list_users():
    users = [_public_user(u) for u in db['users'].values()]
    return jsonify({'users': users}), 200
