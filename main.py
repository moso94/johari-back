from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.orm import sessionmaker, declarative_base, relationship

DATABASE_URL = "sqlite:///./test.db"  # Change this to your database URL
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Models
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

# Pydantic Models
class UserCreate(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None

class AdjectiveCreate(BaseModel):
    title: str

class ProjectCreate(BaseModel):
    slug: str
    user_id: int

class FeedBackCreate(BaseModel):
    user_id: int
    project_id: int

# FastAPI app
app = FastAPI()

@app.post("/users/", response_model=UserCreate)
def create_user(user: UserCreate):
    db = SessionLocal()
    db_user = User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get("/users/", response_model=List[UserCreate])
def read_users():
    db = SessionLocal()
    users = db.query(User).all()
    return users

@app.get("/users/{user_id}", response_model=UserCreate)
def read_user(user_id: int):
    db = SessionLocal()
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@app.put("/users/{user_id}", response_model=UserCreate)
def update_user(user_id: int, user: UserCreate):
    db = SessionLocal()
    db_user = db.query(User).filter(User.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    for key, value in user.dict().items():
        setattr(db_user, key, value)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.delete("/users/{user_id}", response_model=UserCreate)
def delete_user(user_id: int):
    db = SessionLocal()
    db_user = db.query(User).filter(User.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    db.delete(db_user)
    db.commit()
    return db_user

@app.post("/adjectives/", response_model=AdjectiveCreate)
def create_adjective(adjective: AdjectiveCreate):
    db = SessionLocal()
    db_adjective = Adjective(**adjective.dict())
    db.add(db_adjective)
    db.commit()
    db.refresh(db_adjective)
    return db_adjective

@app.get("/adjectives/", response_model=List[AdjectiveCreate])
def read_adjectives():
    db = SessionLocal()
    adjectives = db.query(Adjective).all()
    return adjectives

@app.get("/adjectives/{adjective_id}", response_model=AdjectiveCreate)
def read_adjective(adjective_id: int):
    db = SessionLocal()
    adjective = db.query(Adjective).filter(Adjective.id == adjective_id).first()
    if adjective is None:
        raise HTTPException(status_code=404, detail="Adjective not found")
    return adjective

@app.put("/adjectives/{adjective_id}", response_model=AdjectiveCreate)
def update_adjective(adjective_id: int, adjective: AdjectiveCreate):
    db = SessionLocal()
    db_adjective = db.query(Adjective).filter(Adjective.id == adjective_id).first()
    if db_adjective is None:
        raise HTTPException(status_code=404, detail="Adjective not found")
    for key, value in adjective.dict().items():
        setattr(db_adjective, key, value)
    db.commit()
    db.refresh(db_adjective)
    return db_adjective

@app.delete("/adjectives/{adjective_id}", response_model=AdjectiveCreate)
def delete_adjective(adjective_id: int):
    db = SessionLocal()
    db_adjective = db.query(Adjective).filter(Adjective.id == adjective_id).first()
    if db_adjective is None:
        raise HTTPException(status_code=404, detail="Adjective not found")
    db.delete(db_adjective)
    db.commit()
    return db_adjective

@app.post("/projects/", response_model=ProjectCreate)
def create_project(project: ProjectCreate):
    db = SessionLocal()
    db_project = Project(**project.dict())
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project

@app.get("/projects/", response_model=List[ProjectCreate])
def read_projects():
    db = SessionLocal()
    projects = db.query(Project).all()
    return projects

@app.get("/projects/{project_id}", response_model=ProjectCreate)
def read_project(project_id: int):
    db = SessionLocal()
    project = db.query(Project).filter(Project.id == project_id).first()
    if project is None:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

@app.put("/projects/{project_id}", response_model=ProjectCreate)
def update_project(project_id: int, project: ProjectCreate):
    db = SessionLocal()
    db_project = db.query(Project).filter(Project.id == project_id).first()
    if db_project is None:
        raise HTTPException(status_code=404, detail="Project not found")
    for key, value in project.dict().items():
        setattr(db_project, key, value)
    db.commit()
    db.refresh(db_project)
    return db_project

@app.delete("/projects/{project_id}", response_model=ProjectCreate)
def delete_project(project_id: int):
    db = SessionLocal()
    db_project = db.query(Project).filter(Project.id == project_id).first()
    if db_project is None:
        raise HTTPException(status_code=404, detail="Project not found")
    db.delete(db_project)
    db.commit()
    return db_project

@app.post("/feedback/", response_model=FeedBackCreate)
def create_feedback(feedback: FeedBackCreate):
    db = SessionLocal()
    db_feedback = FeedBack(**feedback.dict())
    db.add(db_feedback)
    db.commit()
    db.refresh(db_feedback)
    return db_feedback

@app.get("/feedback/", response_model=List[FeedBackCreate])
def read_feedback():
    db = SessionLocal()
    feedback = db.query(FeedBack).all()
    return feedback

@app.get("/feedback/{feedback_id}", response_model=FeedBackCreate)
def read_feedback_entry(feedback_id: int):
    db = SessionLocal()
    feedback_entry = db.query(FeedBack).filter(FeedBack.id == feedback_id).first()
    if feedback_entry is None:
        raise HTTPException(status_code=404, detail="Feedback not found")
    return feedback_entry

@app.put("/feedback/{feedback_id}", response_model=FeedBackCreate)
def update_feedback(feedback_id: int, feedback: FeedBackCreate):
    db = SessionLocal()
    db_feedback = db.query(FeedBack).filter(FeedBack.id == feedback_id).first()
    if db_feedback is None:
        raise HTTPException(status_code=404, detail="Feedback not found")
    for key, value in feedback.dict().items():
        setattr(db_feedback, key, value)
    db.commit()
    db.refresh(db_feedback)
    return db_feedback

@app.delete("/feedback/{feedback_id}", response_model=FeedBackCreate)
def delete_feedback(feedback_id: int):
    db = SessionLocal()
    db_feedback = db.query(FeedBack).filter(FeedBack.id == feedback_id).first()
    if db_feedback is None:
        raise HTTPException(status_code=404, detail="Feedback not found")
    db.delete(db_feedback)
    db.commit()
    return db_feedback

Base.metadata.create_all(bind=engine)
