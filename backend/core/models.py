from dataclasses import dataclass, asdict
from typing import Optional


@dataclass
class User:
    id: str
    name: str
    email: str
    password: str
    role: str

    def to_dict(self) -> dict:
        return asdict(self)


@dataclass
class Role:
    name: str


@dataclass
class Appointment:
    id: str
    tutor_id: str
    student_id: Optional[str]
    time: str

    def to_dict(self) -> dict:
        return asdict(self)
