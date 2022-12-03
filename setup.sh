#!/bin/bash

mkdir $1
cd $1
touch README.md
echo $'# TITLE\n\n## Description\n\n\n\n## Link\n\n\n\n' > README.md
