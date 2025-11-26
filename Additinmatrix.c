#include<stdio.h>
int main()
{
	int a[10][10],b[10][10],x[10][10],i,j,r,c;
	
	printf("Enter the number of elements you want :");
	scanf("%d%d",&r,&c);
	
	printf("Enter the matrix A");
	
for(i=0;i<r;i++)
{
	for(j=0;j<c;j++)
	{
	scanf("%d",&a[i][j]);	
	}
}
printf("Enter the matrix B");
for(i=0;i<r;i++)
{
	for(j=0;j<c;j++)
	{
scanf("%d",&b[i][j]);
	}
}

for(i=0;i<r;i++)
{
	for(j=0;j<c;j++)
	{
	x[i][j]=a[i][j]+b[i][j];
	}
}

printf("The Addition matrix X is :");
for(i=0;i<r;i++)
{
	for(j=0;j<c;j++)
	{
	printf("%d\t",x[i][j]);
	}
printf("\n");
}

		return 0;
}
