from flask import Blueprint, request, render_template
from .controllers import ai_chat

main = Blueprint('main', __name__)

@main.route("/", methods=['POST', 'GET'])
def home(): 
    res= request.form.get("text") or "dont respond one time"
    return render_template('index.html', chat=ai_chat(res))
    