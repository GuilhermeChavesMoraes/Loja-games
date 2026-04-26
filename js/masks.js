function maskPhone(e) {
  let v = e.target.value.replace(/\D/g, "").slice(0, 11);
  if (v.length >= 2)  v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
  if (v.length >= 11) v = v.slice(0, 9) + v.slice(9, 13).replace(/(\d{4})(\d{4})/, "$1-$2");
  else if (v.length > 9) v = v.slice(0, 9) + "-" + v.slice(9);
  e.target.value = v;
}

function maskCEP(e) {
  let v = e.target.value.replace(/\D/g, "").slice(0, 8);
  if (v.length > 5) v = v.slice(0, 5) + "-" + v.slice(5);
  e.target.value = v;
}
