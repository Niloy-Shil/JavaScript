let given=[1,2,3,4]
let t=0
let a=[]
let r=3

const len=given.length

function run(loop,y,k){

   for(let i=loop;i<k-r+1+y;i++)
   {
      a[y]=given[i]
      if(y<r-1)
      {
      t++
      run(i+1,t,k)
      }
     
     if(y==r-1)
      console.log(a)
     if(i==(k-r+y))
      {t--
   y--}

   }
}

run(0,t,len)
