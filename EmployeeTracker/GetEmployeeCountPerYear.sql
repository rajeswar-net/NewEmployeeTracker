/****** Object:  StoredProcedure [dbo].[GetEmployeeCountPerYear]    Script Date: 6/25/2018 3:43:43 PM ******/







CREATE PROCEDURE [dbo].[GetEmployeeCountPerYear]
AS
	SET NOCOUNT ON;

	SELECT		DATEPART(YEAR, a.[start_date]) AS [Key]
				,(SELECT COUNT(b.employee_id) 
                 FROM	dbo.employee b
                 WHERE DATEPART(YEAR, b.[start_date]) <= DATEPART(YEAR, a.[start_date])) AS [Value]
	FROM		dbo.employee a
	GROUP BY	DATEPART(YEAR, a.[start_date]) 
	ORDER BY	DATEPART(YEAR, a.[start_date]) 


