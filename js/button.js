
const firstBtn=document.getElementById('first-btn')
    .addEventListener('click',
    function(event){
       const complete= event.target.disabled=true;
       const taskAssign=document.getElementById('task-assign').innerText;
       const  convertToNum=parseInt(taskAssign);
       const totalComplete=document.getElementById('total-complete').innerText;
       const totalToNum=parseInt(totalComplete);
        if(complete === true){
            alert('Board Update Successfully');
          const sub=convertToNum-1;
          console.log(sub);
          document.getElementById('task-assign').innerText=sub;

          const sum=totalToNum+1;
          document.getElementById('total-complete').innerText=sum;
                      
        }
        else{
            console.log("Nothing executed");            
        }        
    }
)


const secondBtn=document.getElementById('second-btn').
    addEventListener('click',
        function(event){
            const complete=event.target.disabled=true;
            const taskAssign=document.getElementById('task-assign').innerText;
            const  convertToNum=parseInt(taskAssign);
            const totalComplete=document.getElementById('total-complete').innerText;
            const totalToNum=parseInt(totalComplete);
            if(complete===true){
                alert('Board Update Successfully');
                const sub2=convertToNum-1;
                const sum2=totalToNum+1;             
                document.getElementById('task-assign').innerText=sub2;
                document.getElementById('total-complete').innerText=sum2;
                
            }
        }
    )

const thirdBtn=document.getElementById('third-btn')
        .addEventListener('click',
        function(event){
            const complete=event.target.disabled=true;
            const taskAssign=document.getElementById('task-assign').innerText;
            const  convertToNum=parseInt(taskAssign);
            const totalComplete=document.getElementById('total-complete').innerText;
            const totalToNum=parseInt(totalComplete);
            if(complete===true){
                alert('Board Update Successfully');
                const sub3=convertToNum-1;
                const sum3=totalToNum+1;
                document.getElementById('task-assign').innerText=sub3;
                document.getElementById('total-complete').innerText=sum3;
            }

    })




