/****** Object:  StoredProcedure [dbo].[AddEmployees]    Script Date: 6/25/2018 3:42:11 PM ******/







CREATE PROCEDURE [dbo].[AddEmployees] 
  @FirstName nvarchar(100),
  @LastName nvarchar(100),
  @PositionId  int,
  @OfficeId int,
  @Sex char(1),
  @Age int,
  @StartDate datetime=getdate,
  @Salary money,
  @Updated_Utc datetime2(7)=SYSUTCDATETIME
 AS
	SET NOCOUNT ON;
	print @StartDate
	print @Updated_Utc
	Declare @InsertedIdentity as int
	Insert into employee
	(first_name,last_name,position_id,office_id,sex,age,start_date,salary,updated_utc) values(@FirstName,@LastName,@PositionId,@OfficeId,@Sex,@Age,@StartDate,@Salary,@Updated_Utc)
	Set @InsertedIdentity=SCOPE_IDENTITY()

	SELECT		e.employee_id AS [Id]
				,e.first_name AS [FirstName]
				,e.last_name AS [LastName]
				,p.position AS [Position]
				,o.office AS [Office]
				,e.sex AS [Sex]
				,e.age AS [Age]
				,e.[start_date] AS [StartDate]
				,e.salary AS [Salary]
	FROM		[dbo].[employee] e
	INNER JOIN	[dbo].[position] p
		ON		e.position_id = p.position_id
	INNER JOIN	[dbo].[office] o
		ON		e.office_id = o.office_id where e.employee_id=@InsertedIdentity



