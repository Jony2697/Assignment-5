
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
          if(sub1 ===0){
            alert('Congrats!!! You have completed all the current task')
        }
                      
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
                if(sub2 ===0){
                    alert('Congrats!!! You have completed all the current task')
                }
                
            }
            else{
                console.log("Nothing executed");
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
                if(sub3 ===0){
                    alert('Congrats!!! You have completed all the current task')
                }
            }
            else{
                console.log("Nothing executed");
            }

    })
const fourthBtn=document.getElementById('fourth-btn')
        .addEventListener('click',
        function(event){
            const complete=event.target.disabled=true;
            const taskAssign=document.getElementById('task-assign').innerText;
            const  convertToNum=parseInt(taskAssign);
            const totalComplete=document.getElementById('total-complete').innerText;
            const totalToNum=parseInt(totalComplete);
            if(complete===true){
                alert('Board Update Successfully');
                const sub4=convertToNum-1;
                const sum4=totalToNum+1;
                document.getElementById('task-assign').innerText=sub4;
                document.getElementById('total-complete').innerText=sum4;
                if(sub4 ===0){
                    alert('Congrats!!! You have completed all the current task')
                }
            }
            else{
                console.log("Nothing executed");
            }


      })
const fifthBtn=document.getElementById('fifth-btn')
        .addEventListener('click',
        function(event){
            const complete=event.target.disabled=true;
            const taskAssign=document.getElementById('task-assign').innerText;
            const  convertToNum=parseInt(taskAssign);
            const totalComplete=document.getElementById('total-complete').innerText;
            const totalToNum=parseInt(totalComplete);
            if(complete===true){
                alert('Board Update Successfully');
                const sub5=convertToNum-1;
                const sum5=totalToNum+1;
                document.getElementById('task-assign').innerText=sub5;
                document.getElementById('total-complete').innerText=sum5;
                if(sub5 ===0){
                    alert('Congrats!!! You have completed all the current task')
                }
            }
            else{
                console.log("Nothing executed");
            }


      })
const sixBtn=document.getElementById('six-btn')
        .addEventListener('click',
        function(event){
            const complete=event.target.disabled=true;
            const taskAssign=document.getElementById('task-assign').innerText;
            const  convertToNum=parseInt(taskAssign);
            const totalComplete=document.getElementById('total-complete').innerText;
            const totalToNum=parseInt(totalComplete);
            if(complete===true){
                alert('Board Update Successfully');            
                const sub6=convertToNum-1;
                const sum6=totalToNum+1;
                document.getElementById('task-assign').innerText=sub6;
                document.getElementById('total-complete').innerText=sum6;
                if(sub6 ===0){
                    alert('Congrats!!! You have completed all the current task')
                }
            }
            else{
                console.log("Nothing executed");
            }


      })
    

   const first= document.getElementById('first-btn')
        .addEventListener('click',
        function(event){
           const title= document.getElementById('titleOne').innerText;
            console.log(title);           
            const details=document.getElementById('details');
            console.log(details);
            const currentTime = new Date();
            const formattedTime = currentTime.toLocaleTimeString();
            const newDiv=document.createElement('div');
            const newP=document.createElement('p');
            newP.innerText=`You have completed the task ${title}at ${formattedTime} `;
            newDiv.appendChild(newP);
            details.appendChild(newDiv);
            newP.style.backgroundColor='lightblue';
            newP.style.borderRadius='10px';
            newP.style.marginTop='10px';

    })

    


 
 
 
    



