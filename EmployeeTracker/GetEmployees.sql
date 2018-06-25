/****** Object:  StoredProcedure [dbo].[GetEmployees]    Script Date: 6/25/2018 3:44:22 PM ******/







CREATE PROCEDURE [dbo].[GetEmployees]
AS
	SET NOCOUNT ON;
	
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
		ON		e.office_id = o.office_id
	


