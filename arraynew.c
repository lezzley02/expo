#include<stdio.h>
int main()
{
	int a[10],n,i,pos,new;
	scanf("%d",&n);
	
	for (i=0;i<n;i++)
	scanf("%d",&a[i]);
	scanf("%d",&pos);
	scanf("%d",&new);
	a[pos]=new;
	
	for (i=0;i<n;i++)
	printf("%d\t",a[i]);
	
	return 0;
}
	

