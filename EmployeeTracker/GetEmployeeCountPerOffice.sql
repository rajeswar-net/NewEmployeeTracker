/****** Object:  StoredProcedure [dbo].[GetEmployeeCountPerOffice]    Script Date: 6/25/2018 3:43:12 PM ******/







CREATE PROCEDURE [dbo].[GetEmployeeCountPerOffice]
AS
	SET NOCOUNT ON;
	
	SELECT		o.office AS [Key]
				,COUNT(e.employee_id) AS [Value]
	FROM		[dbo].[employee] e
	INNER JOIN	[dbo].[office] o
		ON		e.office_id = o.office_id
	GROUP BY    o.office


