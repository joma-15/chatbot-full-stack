from flask import Blueprint, request, render_template
from .controllers import ai_chat

main = Blueprint('main', __name__)

@main.route("/", methods=['POST', 'GET'])
def home(): 
    response = request.form.get('user-message')
    ai = ""

    if response and response.strip(): #check if there is a response available
        ai = ai_chat(response)
    return render_template('index.html', chat=ai)
    