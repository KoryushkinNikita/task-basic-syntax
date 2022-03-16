export function romanToInteger(str) {
  let result = 0
    let i = 0
    while(i<str.length){
      if (str[i] === 'I') {
          if (str[i+1] === 'V') result += 4
          else if (str[i+1] === 'X') {result +=9; i+=2}
          else if (str[i+1] === 'L') {result +=49; i+=2}
          else if (str[i+1] === 'C') {result +=99; i+=2}
          else if (str[i+1] === 'D') {result +=499; i+=2}
          else if (str[i+1] === 'M') {result +=999; i+=2}
          else {result++; i++}
      }

         if (str[i] === 'V') {
            if (str[i+1] === 'L') {result +=45; i+=2}
            else if (str[i+1] === 'C') {result +=95; i+=2}
            else if (str[i+1] === 'D') {result +=495; i+=2}
            else if (str[i+1] === 'M') {result +=995; i+=2}
            else {result += 5; i++}
          }
        if (str[i] === 'X') {
            if (str[i+1] === 'L') {result +=40; i+=2}
            else if (str[i+1] === 'C') {result +=90; i+=2}
            else if (str[i+1] === 'D') {result +=490; i+=2}
            else if (str[i+1] === 'M') {result +=990; i+=2}
            else {result += 10; i++}
          }
        if (str[i] === 'L') {
            if (str[i+1] === 'D') {result +=450; i+=2}
            else if (str[i+1] === 'M') {result +=950; i+=2}
            else {result += 50; i++}
          }
        if (str[i] === 'C') {
            if (str[i+1] === 'D') {result +=400; i+=2}
            else if (str[i+1] === 'M') {result +=900; i+=2}
            else {result += 100; i++}
          }
        if (str[i] === 'D') {result += 500; i++}
        if (str[i] === 'M') {result += 1000; i++}
    //   switch (str[i]) {
    //     case 'I': result += 1; break
    //     case 'IV': result += 4; break
    //     case 'V': result += 5; break
    //     case 'IX': result += 9; break
    //     case 'X': result += 10; break
    //     case 'IL': result += 49; break
    //     case 'L': result += 50; break
    //     case 'C': result += 100; break
    //     case 'D': result += 500; break
    //     case 'M': result += 1000; break
    //   }
    }
    return result;
}
