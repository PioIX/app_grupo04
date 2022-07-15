from flask import Flask, render_template
import sqlite3

app = Flask(__name__)     

@app.route('/')
def index():
  lista=[]
  conn = sqlite3.connect('bases_de_datos.db')
  cur = conn.execute(f"""SELECT  * 
          FROM Afirmaciones""")
  
  for x in cur:
    print(x)
    dicc = {}
    dicc['id'] = x[0]
    ...
    lista.append(dicc)
    
  conn.close()

  return render_template('home.html', afirmaciones=lista)

  
app.run(host='0.0.0.0', port=81)