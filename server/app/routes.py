from flask import Blueprint, request
from flask import jsonify
from .controllers import ai_chat

main = Blueprint('main', __name__)

@main.route("/", methods=['POST'])
def home(): 
    data = request.get_json()
    if not data: 
        return 'no input has been received'
    
    message = data.get("message", "")
    return jsonify({"reply" : f" {ai_chat(message)}"})
    