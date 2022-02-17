let logFlag = true;
let akbar = async (data: any) => {
  if (logFlag) {
    console.log(data);
  } else return;
};
export { akbar };
