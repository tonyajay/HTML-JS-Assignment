function array_element_mode(arr)
{
    var ctr = [], ans = 0;

    for(var i = 0; i < 10; i++)
    {
        ctr.push(0);
    }

    for(var i = 0; i<arr.length; i++)
    {
        ctr[arr[i]]++;
        if (ctr[arr[i]] > ctr[ans])
        {
            ans = arr[i];
        }
    }
    return ans;
}
console.log(array_element_mode([0,4,0,2,6,8,3,9,0,0]))