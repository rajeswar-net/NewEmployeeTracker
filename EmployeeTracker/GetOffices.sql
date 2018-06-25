/****** Object:  StoredProcedure [dbo].[GetOffices]    Script Date: 6/25/2018 3:44:47 PM ******/

-- =============================================
-- Author:		Rajesh
-- Create date: 6/13/2018
-- Description:	To Get list of offices
-- =============================================
CREATE PROCEDURE [dbo].[GetOffices] 
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT office_id as Id,office as OfficeName from office 
END




