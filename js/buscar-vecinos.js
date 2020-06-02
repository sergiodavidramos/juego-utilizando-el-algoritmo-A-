// function probarVecinos(padre, map) {
//   var salida = [];
//   var player = padre;
//   puntosG = [10, 200];
//   sonda = [padre.x, padre.y];
//   var comprobarLista = {};
//   const estrella = new Estrella(inicial, final, lienzo);
// //   console.log(sonda[0] - 1);

//   if (sonda[0] - 1 != -1 && sonda[1] - 1 != -1) {
//     if (map[sonda[0] - 1][sonda[1] - 1] != 1) {
//       if (
//         estrella.comprobarListaCerrada(
//           [sonda[0] - 1, sonda[1] - 1],
//           listaCerrada
//         )
//       ) {
//         comprobarLista = estrella.comprobarListaAbierta(
//           [sonda[0] - 1, sonda[1] - 1],
//           listaAbierta
//         );
//         if (comprobarLista.status) {
//           if (G(player, puntosG[1]) < listaAbierta[comprobarLista.indice].G) {
//             listaAbierta[comprobarLista.indice] = {
//               tag: "ArribaIzquierda",
//               x: sonda[0] - 1,
//               y: sonda[1] - 1,
//               G: G(player, puntosG[1]),
//               H: Hache([sonda[0] - 1, sonda[1] - 1]),
//               F: function () {
//                 return this.G + this.H;
//               },
//               padre: [sonda[0], sonda[1]],
//             };
//           }
//         } else {
//           salida.push({
//             tag: "ArribaIzquierda",
//             x: sonda[0] - 1,
//             y: sonda[1] - 1,
//             G: G(player, puntosG[1]),
//             H: Hache([sonda[0] - 1, sonda[1] - 1]),
//             F: function () {
//               return this.G + this.H;
//             },
//             padre: [sonda[0], sonda[1]],
//           });
//         }
//       }
//     }
//   }



function comprobarVecinos(padre, map) {
    var salida = [];
    var player = padre;

    var puntosG = [10, 14];
    var sonda = [padre.x, padre.y];
    var comprobarLista = {};

    if(sonda[0] - 1 != -1 && sonda[1] - 1 != -1) {
        if(map[sonda[0]-1][sonda[1]-1] != 1) {
// comprueba que no se encuentre en la lista cerrada
            if(comprobarListaCerrada([sonda[0]-1, sonda[1]-1] , listaCerrada)) {

                comprobarLista = comprobarListaAbierta([sonda[0]-1, sonda[1]-1] , listaAbierta);
                if(comprobarLista.status) {
                    if(G(player, puntosG[1]) < listaAbierta[comprobarLista.indice].G) {
                        listaAbierta[comprobarLista.indice] = {
                            tag: "ArribaIzquierda",
                            x: sonda[0]-1,
                            y: sonda[1]-1,
                            G: G(player, puntosG[1]),
                            H: Hache([sonda[0]-1, sonda[1]-1]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        };  
                    }
                } else { //creamos un nuevo objeto
                    salida.push({
                            tag: "ArribaIzquierda",
                            x: sonda[0]-1,
                            y: sonda[1]-1,
                            G: G(player, puntosG[1]),
                            H: Hache([sonda[0]-1, sonda[1]-1]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        });
                }
            }
        }
    } 

    if(sonda[1] - 1 != -1) {
        if(map[sonda[0]][sonda[1]-1] != 1) { 
            if(comprobarListaCerrada([sonda[0], sonda[1]-1] , listaCerrada)) {	
                
                comprobarLista = comprobarListaAbierta([sonda[0], sonda[1]-1] , listaAbierta);
                if(comprobarLista.status) {

                    if(G(player, puntosG[0]) < listaAbierta[comprobarLista.indice].G) {
                        listaAbierta[comprobarLista.indice] = {
                            tag: "ArribaCentro",
                            x: sonda[0],
                            y: sonda[1]-1,
                            G: G(player, puntosG[0]),
                            H: Hache([sonda[0], sonda[1]-1]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        };
                    }

                    
                } else {

                    salida.push(
                        {
                            tag: "ArribaCentro",
                            x: sonda[0],
                            y: sonda[1]-1,
                            G: G(player, puntosG[0]),
                            H: Hache([sonda[0], sonda[1]-1]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        }
                    );

                }
            
            }
        }
    } 

    if(sonda[0] + 1 < map.length && sonda[1] - 1 != -1) {
        if(map[sonda[0]+1][sonda[1]-1] != 1) {
            if(comprobarListaCerrada([sonda[0]+1, sonda[1]-1] , listaCerrada)) {

                comprobarLista = comprobarListaAbierta([sonda[0]+1, sonda[1]-1] , listaAbierta);
                if(comprobarLista.status) {
                    if(G(player, puntosG[1]) < listaAbierta[comprobarLista.indice].G) {
                        listaAbierta[comprobarLista.indice] = {	
                                tag: "ArribaDerecha",
                                x: sonda[0]+1,
                                y: sonda[1]-1,
                                G: G(player, puntosG[1]),
                                H: Hache([sonda[0]+1, sonda[1]-1]),
                                F: function() { 
                                    return this.G + this.H 
                                },
                                padre: [sonda[0], sonda[1]]
                            };
                    }
                } else {

                    salida.push(
                        {	
                            tag: "ArribaDerecha",
                            x: sonda[0]+1,
                            y: sonda[1]-1,
                            G: G(player, puntosG[1]),
                            H: Hache([sonda[0]+1, sonda[1]-1]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        }
                    );

                }




            }
        }
    } 
    // Centro izquierda
    if(sonda[0] - 1 != -1) {
        if(map[ sonda[0]-1][sonda[1] ] != 1) {
            if(comprobarListaCerrada([sonda[0]-1, sonda[1]] , listaCerrada)) {

                comprobarLista = comprobarListaAbierta([sonda[0]-1, sonda[1]] , listaAbierta);
                if(comprobarLista.status) {
                    if(G(player, puntosG[0]) < listaAbierta[comprobarLista.indice].G) {
                        listaAbierta[comprobarLista.indice] = {
                            tag: "CentroIzquierda",
                            x: sonda[0]-1,
                            y: sonda[1],
                            G: G(player, puntosG[0]),
                            H: Hache([sonda[0]-1, sonda[1]]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        };
                    }
                } else {
                    salida.push(
                        {
                            tag: "CentroIzquierda",
                            x: sonda[0]-1,
                            y: sonda[1],
                            G: G(player, puntosG[0]),
                            H: Hache([sonda[0]-1, sonda[1]]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        }
                
                    );
                }
                

            }
        }
    } 

    // Centro derecha
    if(sonda[0] + 1 < map.length) {
        if(map[sonda[0]+1][sonda[1]] != 1) {
            if(comprobarListaCerrada([sonda[0]+1, sonda[1]] , listaCerrada)) {

                comprobarLista = comprobarListaAbierta([sonda[0]+1, sonda[1]], listaAbierta);
                if(comprobarLista.status) {
                    if(G(player, puntosG[0]) < listaAbierta[comprobarLista.indice].G) {
                        listaAbierta[comprobarLista.indice] = {
                            tag: "CentroDerecha",
                            x: sonda[0]+1,
                            y: sonda[1],
                            G: G(player, 10),
                            H: Hache([sonda[0]+1, sonda[1]]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        };
                    }
                } else {
                    salida.push(
                        {
                            tag: "CentroDerecha",
                            x: sonda[0]+1,
                            y: sonda[1],
                            G: G(player, 10),
                            H: Hache([sonda[0]+1, sonda[1]]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        }
                    );
                }






            }
        }
    } 

    // abajo izquierda
    if(sonda[0] - 1 != -1 && sonda[1] + 1 < map[0].length) {
        if(map[sonda[0]-1][sonda[1]+1] != 1) {
            if(comprobarListaCerrada([sonda[0]-1, sonda[1]+1] , listaCerrada)) {

                comprobarLista = comprobarListaAbierta([sonda[0]-1, sonda[1]+1], listaAbierta);
                if(comprobarLista.status) {
                    if(G(player, puntosG[1]) < listaAbierta[comprobarLista.indice].G) {
                        listaAbierta[comprobarLista.indice] = {
                            tag: "AbajoIzquierda",
                            x: sonda[0]-1,
                            y: sonda[1]+1,
                            G: G(player, puntosG[1]),
                            H: Hache([sonda[0]-1, sonda[1]+1]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        };
                    }
                } else {

                    salida.push(
                        {
                            tag: "AbajoIzquierda",
                            x: sonda[0]-1,
                            y: sonda[1]+1,
                            G: G(player, puntosG[1]),
                            H: Hache([sonda[0]-1, sonda[1]+1]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        }
                    );

                }



            }
        }
    } 

    // abajo centro
    if(sonda[1] + 1 < map[0].length) {
        if(map[sonda[0]][sonda[1]+1] != 1) {
            if(comprobarListaCerrada([sonda[0], sonda[1]+1], listaCerrada)) {
            
            comprobarLista = comprobarListaAbierta([sonda[0], sonda[1]+1], listaAbierta);
            if(comprobarLista.status) {
                if(G(player, puntosG[0]) < listaAbierta[comprobarLista.indice].G) {
                    listaAbierta[comprobarLista.indice] = {
                        tag: "AbajoCentro",
                        x: sonda[0],
                        y: sonda[1]+1,
                        G: G(player, puntosG[0]),
                        H: Hache([sonda[0], sonda[1]+1]),
                        F: function() { 
                            return this.G + this.H 
                        },
                        padre: [sonda[0], sonda[1]]
                    };
                }
            } else {

                salida.push(
                    {
                        tag: "AbajoCentro",
                        x: sonda[0],
                        y: sonda[1]+1,
                        G: G(player, puntosG[0]),
                        H: Hache([sonda[0], sonda[1]+1]),
                        F: function() { 
                            return this.G + this.H 
                        },
                        padre: [sonda[0], sonda[1]]
                    }
                );
            
            }



            }
        }
    } 

    // abajo derecha
    if(sonda[0] + 1 < map.length && sonda[1] + 1 < map[0].length) {
        if(map[sonda[0]+1][sonda[1]+1] != 1) {
            if(comprobarListaCerrada([sonda[0]+1, sonda[1]-1] , listaCerrada)) {


                comprobarLista = comprobarListaAbierta([sonda[0]+1, sonda[1]-1], listaAbierta);
                if(comprobarLista.status) {
                    if(G(player, puntosG[1]) < listaAbierta[comprobarLista.indice].G) {
                        listaAbierta[comprobarLista.indice] = {
                            tag: "AbajoDerecha",
                            x: sonda[0]+1,
                            y: sonda[1]+1,
                            G: G(player, puntosG[1]),
                            H: Hache([sonda[0]+1, sonda[1]+1]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        };
                    }
                } else {

                    salida.push(
                        {
                            tag: "AbajoDerecha",
                            x: sonda[0]+1,
                            y: sonda[1]+1,
                            G: G(player, puntosG[1]),
                            H: Hache([sonda[0]+1, sonda[1]+1]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        }
                    );

                }





            }
        }
    } 
    // Hache([1, 2]);
    return salida;
}

function G(padre, valor) {
    var salida = 0;
    if(padre.G != undefined) {
        salida = padre.G + valor; 
    } else {
        salida = valor;
    }

    return salida;
}

function Hache(inicio) {
    var saltos = (Math.abs(inicio[0] - destino.x)) + (Math.abs(inicio[1] - destino.y));
    return saltos * 10;
}