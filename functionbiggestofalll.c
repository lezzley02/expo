#include<stdio.h>
int biggest(int a,int b,int c,int d)
{
	if(a>b&&a>c&&a>d)
	return a;
	else if(b>a&&b>c&&b>d)
	return b;
	else if(c>a&&c>b&&c>d)
	return c;
	else
	return d;
}
int main()
{
     int result;
     result=biggest(10,20,3,5);
     printf("Biggest Number is : %d",result);
     return 0;
}
