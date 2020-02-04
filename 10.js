function remove_duplicate_cchars(str) 
{
    const arr_char = str.split("");
    const result_arr = [];
  
    for (let i = 0; i < arr_char.length; i++) 
      if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
        result_arr.push(arr_char[i]);
      
    return result_arr.join("");
}
  console.log(remove_duplicate_cchars("abcdabc"));