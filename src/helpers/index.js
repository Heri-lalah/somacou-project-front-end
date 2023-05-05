function formattedDate(value) {
  let day = value.substring(0,2);
  let month = value.substring(3,5);
  let year = value.substring(6, value.length + 2);

  if(value.length == 2 && day==Number(day) || value.length==5 && month==Number(month)){
    return value = value + "/"
  }
    return value.substring(0,10);
}

 export {formattedDate}
