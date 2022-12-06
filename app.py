from flask import Flask, render_template, request
from graph import place

app = Flask(__name__)
@app.route("/")
def index():

    return render_template('index.html',place=place)

@app.route("/table")
def table():
    value_data=[1,2,3,4,6,7],[4,5,6,10,12,13],[7,8,9,20,1,6,10]
    time=len(value_data)
    label_data=['apple','banana','grape']
    return render_template('table.html',value_data=value_data,time=time,label_data=label_data)

@app.route("/tax")
def tax():
    return render_template('tax.html',ABlabels=[1,2,3],
    Avalues2M=[4,5,6], Avalues1M=[7,8,9], Avalues0M=[1,0,1],
    legend2M="x",legend1M="y",legend0M="z")