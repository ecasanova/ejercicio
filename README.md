# Ejercicio entrevista 

Se pide hacer un script, para leer un archivo .csv con 3.000.000 de registros, para subir a una base de datos tipo mongodb. Los datos estan en el arhivo csv de la siguiente forma

Tener en cuenta que los datos no estan agrupados, es decir, pueden existir varias lineas correspondientes a una misma persona, pero con diferentes tecnologias

name,lastname,date,position,technology
John,Doe,05-20-1985,Engineer,javascript
Frodo,Baggins,10-07-1985,Architect,GCP
John,Doe,05-20-1985,Engineer,python
John,Doe,05-20-1985,Engineer,javascript

Y se desean guardan en un objeto tipo JSON en con la siguiente estructura:

[
...
{
  'name':'Jhon',
  'lastname':'Doe',
  'Frodo':'Baggins',
  'age':35,
  'position':'Architect',
  'fav_tech':'javascript, python'
},
...
]

Las tecnologías favoritas deben estar agrupadas separadas por coma, en una sola columna.

