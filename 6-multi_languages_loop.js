#!/usr/bin/node

const texts = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
let result = '';

for (let i = 0; i < texts.length; i++) {
  result += texts[i] + '\n';
}

console.log(result.trim());
