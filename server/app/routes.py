from flask import Blueprint

main = Blueprint('main', __name__)

@main.route("/")
def home(): 
    while True: 
        something = input('enter something here : ')
        return f'you enter {something}'