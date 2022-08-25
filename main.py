from flask import Flask, render_template
import sqlite3

app = Flask(__name__)     

@app.route('/')
def index():
  return render_template('inicio.html')



@app.route('/juego')
def juego():
  afirmaciones=[]
  conn = sqlite3.connect('bases_de_datos_ods.db')
  cur = conn.execute(f"""SELECT  * 
          FROM Afirmaciones""")
  
  for x in cur:
    dicc = {}
    dicc['id_rta'] = x[0]
    dicc['correcta'] = x[1]
    dicc['id_pregunta'] = x[2]
    dicc['contenido'] = x[3]
    dicc['respuesta'] = x[4]

    afirmaciones.append(dicc)
  
    
  conn.close()

  print(dicc)
  return render_template('juego.html',afirmaciones=afirmaciones)

@app.route('/resultados/<puntaje>/<tiempo>')
def resultados(puntaje, tiempo):
  print("El tiempo fue: ")
  print(tiempo)
  return render_template('resultados.html', puntos=puntaje, tiempoFinal=tiempo)
  

app.run(host='0.0.0.0', port=81)