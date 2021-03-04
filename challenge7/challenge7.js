document.write('loop1<br><br>')

for (a=0; a<5; a++){
  document.write('i love Homework<br>')
}

document.write('<br>loop2<br><br>')
for (b=0; b<5; b++){
  document.write(b)
  document.write('<br>')
}

document.write('<br>loop3<br><br>')
for (c=15; c<31; c=c+3){
  document.write(c)
  document.write('<br>')
}

document.write('<br>loop4<br><br>')
for (d=0; d<4; d++){
  for (e=0; e<4; e++){
    document.write('0')
  }
  document.write('<br>')
}

document.write('<br>loop5<br><br>')
for (f=1; f<8; f++){
  for(g=1; g<=f; g++){
    document.write('O')
  }
  document.write('<br>')
}

document.write('<br>loop6<br><br>')
for (h=0; h<7; h++){
  for(i=h; i<6; i++){
    document.write('O')
  }
  for(j=0; j<h+1; j++){
    document.write('~')
  }
  document.write('<br>')
}


document.write('<br>loop6<br><br>')
for (k=1; k<6; k++){
  for (l=1; l<=k; l++){
    for(m=1; m<=l; m++){
      document.write('O')
    }
    document.write('<br>')
  }
  document.write('<br><br>')
}
