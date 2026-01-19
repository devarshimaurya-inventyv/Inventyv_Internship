let i=0;
let n=5;
for(;i<n;i++){
    for(j=0;j<n;j++)
        process.stdout.write(String((((i<j)?i:j)<((n-i<n-j?n-i:n-j)))?((i<j)?i+1:j+1):((n-i<n-j)?n-i:n-j)));
    console.log();
}