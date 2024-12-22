from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=True)
    email = Column(String, unique=True, index=True, nullable=True)
    projects = relationship("Project", back_populates="user")

class Adjective(Base):
    __tablename__ = "adjectives"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, unique=True, index=True)

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    slug = Column(String, unique=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    user = relationship("User", back_populates="projects")

class FeedBack(Base):
    __tablename__ = "feedback"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    project_id = Column(Integer, ForeignKey("projects.id"))
