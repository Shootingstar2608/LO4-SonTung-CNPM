# backend/modules/integration/library_routes.py
from flask import Blueprint, request, jsonify, g
from datetime import datetime
import uuid

from core.database import db
from core.models import Document
from core.security import require_role




