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


*/