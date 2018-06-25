/****** Object:  StoredProcedure [dbo].[GetDashboardSetting]    Script Date: 6/25/2018 3:42:43 PM ******/







CREATE PROCEDURE [dbo].[GetDashboardSetting]
AS
	SET NOCOUNT ON;

	SELECT	COUNT(position_id) AS TotalPositions
	FROM	[dbo].[position]

	SELECT	COUNT(office_id) AS TotalOffices
	FROM	[dbo].[office]

	SELECT	COUNT(employee_id) AS TotalEmployees
	FROM	[dbo].[employee]

	EXEC [dbo].[GetEmployeeCountPerYear]

	EXEC [dbo].[GetEmployeeCountPerOffice]
	


