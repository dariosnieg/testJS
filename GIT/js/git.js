/*
Para iniciar configuración en la terminal
git config --global user.name {name}
git config --global user.email {email}

para iniciar repositorio LOCAL -> voy hasta la carpeta y luego 
git init

//////////////
3 estados:
- Working directory - Archivos locales
- Stage - paso intermedio entre WD y Repository
- Repository - GitHub, GitLab, BitBucket

/////////////

"Git add --all" o "Git add . " -> todo lo que está en mi proyecto y no se subió, lo sube al stage
"git add Nombre_archivo " -> subo al stage ese único archivo

para commitear
git commit -m "{mensaje de lo commiteado}"

Todo lo commiteado fue al stage

----
Puedo hacer un restore para volver los cambios hacia atras.
"git restore {nombre_archivo}"


---
"git log" -> muestra log de los cambios hechos en el repositorio (commits y cambios del repo)

---
"git status" -> muestra status del repositorio, qué archivos no fueron commiteados, etc

----
RAMAS -> se crean copias de una version para trabajar una alternativa diferente sin afectar el desarrollo actual de esa rama.
"Git checkout -b {nueva_rama}"
Lugeo de checkout verificar que en el costado diga en la rama en la que estoy trabajando

"git branch -l" -> muestra todas las ramas y marca con * la que estoy posicionado/trabajando

"git checkout {nombre_rama}" -> permite navegar en la rama {nombre_rama}
"git checkout {nombre_commit}" -> permite navegar en el commit {nombre_commit}

"git switch {nombre_rama}" -> hace un switch a la rama {nombre_rama}, cambia de una rama a la otra

Desde Master:
"git merge {nombre_rama}" -> hace merge de lo que estaba en rama1 y master. Tener en cuenta que primero hay que hacer add y commit en {nombre_rama} para luego poder hacer un merge



////////////////////////////
GITHUB - GITLAB - BITBUCKET

Creo el repositorio y uso la 2da opción, avisando que ya tengo el repositorio creado




*/