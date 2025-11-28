#include <stdio.h>
int fibonacci(int n)
{
if(n <= 1)
 return n;
else 
 return fibonacci(n - 1) + fibonacci(n - 2);
}
int main()
{
 int i,n;
 printf("Enter the number to be in the terms of the Fibonacci sequence: ");
 scanf("%d", &n);
 printf("Fibonacci Sequence is :\n");
 for (i = 0; i < n; i++)
 printf("%d ", fibonacci(i));
 return 0;
}
