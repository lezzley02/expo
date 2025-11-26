#include<stdio.h>
int main()
{
	int a,b,c;
	printf("Enter the values:");
	scanf("%d%d",&a,&b);
	c=a&b;
	printf("Bitwise AND:%d\n",c);
	
	return 0;
}
