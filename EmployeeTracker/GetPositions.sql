/****** Object:  StoredProcedure [dbo].[GetPositions]    Script Date: 6/25/2018 3:45:03 PM ******/








-- =============================================
-- Author:		Rajesh
-- Create date: 6/13/2018
-- Description:	To Get list of Positions
-- =============================================
CREATE PROCEDURE [dbo].[GetPositions] 
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT position_id as Id,position as PositionName from position
END




