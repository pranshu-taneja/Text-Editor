document.addEventListener('DOMContentLoaded',()=>{
    

    const textbox1 = document.getElementById("one")
    const textbox2 = document.getElementById("two")

    //action1 is the id for a drop down selection menu
    let action = document.getElementById("action1")
    //btn will pick the drop down value selected as a string
    const btn = document.querySelector(".action_button")

    
    const fn = {
        callsplit: (val)=>{
            let temp = val.split(" ")
            let ans = ""

            for (i = 0; i < temp.length; i++) {
                ans += temp[i]
            }
            console.log("Hey")
            return ans
        },
        callreplace: (val)=>{
            let ans = val.replace(/one/g, "two")
            console.log("working")
            return ans
        },
        callcharacteramount: (val)=>{
            let ans = val.replace(/ /g, '').length
            return ans
        },
        callcasechange: (val)=>{
            let ans = val.toUpperCase()
            return ans 
        }

    }

    btn.addEventListener('click',()=>{
        textbox2.value = ""
        let val = fn["call"+ action.value.toLowerCase().replace(/ /g, '')](textbox1.value)
        textbox2.value = val
    })
    
})
