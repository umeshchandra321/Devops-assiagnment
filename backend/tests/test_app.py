import json
from app.main import app

def test_health():
    client = app.test_client()
    response = client.get("/health")
    assert response.status_code == 200
    assert response.get_json() == {"status": "ok"}

def test_message():
    client = app.test_client()
    response = client.post("/api/message", json={"msg": "Hello"})
    assert response.status_code == 200
    assert response.get_json() == {"response": "You said: Hello"}

