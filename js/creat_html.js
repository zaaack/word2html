function insertTitle(path){
      // console.log(path)
      let test1 = path.lastIndexOf("/"); //对路径进行截取
      let test2 = path.lastIndexOf("\\"); //对路径进行截取
      let length= Math.max(test1, test2)
      if (length >0){
            let file_name = path.substring(length+1)
            file_name = file_name.replace('.docx', '')
            file_name = file_name.replace('.doc', '')
            window.file_name = file_name
            console.log(window.file_name)
// document.getElementById("document").value = path.substring(test + 1); //赋值文件名
}
}