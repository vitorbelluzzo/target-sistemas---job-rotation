function reverse_str(str) {
    let nova_str = ''
    for (var i = str.length - 1; i>=0; i--) {  // o loop toda vez que percorre a string, retira uma letra e adiciona a que foi retirada a nova string.
        nova_str += str[i];
    }
     return nova_str;
}

    
console.log(reverse_str('Target Sistemas'));