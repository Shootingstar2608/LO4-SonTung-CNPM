from flask import Flask
import os
from core.database import init_db

# --- IMPORT CÁC BLUEPRINT ---
from modules.integration.auth_routes import bp as auth_bp
from modules.scheduling.routes import bp as scheduling_bp 
from modules.integration.library_routes import bp as library_bp 
from modules.integration.admin_routes import bp as admin_bp
# --- QUAN TRỌNG: Import thêm blueprint Sync vừa tạo ---
from modules.integration.data_sync_routes import bp as data_sync_bp

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-secret')
    
    init_db()
    app.register_blueprint(auth_bp)
    app.register_blueprint(scheduling_bp)
    app.register_blueprint(library_bp)
    app.register_blueprint(admin_bp)
    app.register_blueprint(data_sync_bp)
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)