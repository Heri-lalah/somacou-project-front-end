export default function Workshop(){
  const getContent = () => {
    let data=[];
        for (let index = 1; index <= 10; index++) {
            data.push({
                title : 'Item ' + index,
                value : index
            })
        }
        return data;
  }

  return {
    getContent,
  }
}
