//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}

function buildTree(str)
{
	// Corner Case
	if (str.length === 0 || str[0] == 'N')
		return null;

	// Creating vector of strings from input
	// string after spliting by space
	let ip = new Array();
    
    let ip_str = str.split(" ");
    
	for (let i=0;i<ip_str.length;i++)
		ip.push(ip_str[i]);

	// Create the root of the tree
    let root = new Node(parseInt(ip[0]));

	// Push the root to the queue
	let queue = new Array();
	queue.push(root);

	// Starting from the second element
	let i = 1;
	while (queue.length!==0 && i < ip.length) {

		// Get and remove the front of the queue
		let currNode = queue[0];
		queue.shift();

		// Get the current node's value from the string
		let currVal = ip[i];

		// If the left child is not null
		if (currVal != "N") {

			// Create the left child for the current node
			currNode.left = new Node(parseInt(currVal));

			// Push it to the queue
			queue.push(currNode.left);
		}

		// For the right child
		i++;
		if (i >= ip.length)
			break;
		currVal = ip[i];

		// If the right child is not null
		if (currVal != "N") {

			// Create the right child for the current node
			currNode.right = new Node(parseInt(currVal));

			// Push it to the queue
			queue.push(currNode.right);
		}
		i++;
	}

	return root;
}



function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let s_tree = readLine().trim();
        let root = buildTree(s_tree);
        let obj = new Solution();
       
        let res = obj.largestBst(root);
        console.log(res);
    }
}

// } Driver Code Ends


//User function Template for javascript

/*
class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @return {number}
*/
class Solution {
  	largestBst(root){
  		const postOrder = function(node) {
  		    if(node === null)
  		    {
  	            return { size : 0, max : Number.NEGATIVE_INFINITY, min : Number.POSITIVE_INFINITY }
  		    }
  		    
  		    let lh = postOrder(node.left)
  		    let rh = postOrder(node.right)
  		    
  		    if(lh.max < node.key && rh.min > node.key)
  		    {
  		        return { size : 1 + lh.size + rh.size, max : Math.max(node.key, rh.max), min : Math.min(node.key, lh.min) }
  		    }
  		    else
  		    {
  		        return { size : Math.max(lh.size, rh.size), max : Number.POSITIVE_INFINITY, min : Number.NEGATIVE_INFINITY }
  		    }
  		}
  		
  		let res = postOrder(root)
  		
  		return res.size;
  	}
}