from flask import Flask
import os

from modules.integration.auth_routes import bp as auth_bp
from core.database import init_db


def create_app():
	app = Flask(__name__)
	# set a secret for JWT signing; in production set via env
	app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-secret')
	init_db()
	app.register_blueprint(auth_bp)
	return app


if __name__ == '__main__':
	app = create_app()
	app.run(debug=True, port=5000)
