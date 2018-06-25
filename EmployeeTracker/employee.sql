/****** Object:  Table [dbo].[employee]    Script Date: 6/25/2018 3:39:35 PM ******/
CREATE TABLE [dbo].[employee](
	[employee_id] [int] IDENTITY(1,1) NOT NULL,
	[first_name] [nvarchar](100) NOT NULL,
	[last_name] [nvarchar](100) NOT NULL,
	[position_id] [int] NOT NULL,
	[office_id] [int] NOT NULL,
	[sex] [char](1) NOT NULL,
	[age] [int] NOT NULL,
	[start_date] [datetime] NOT NULL,
	[salary] [money] NOT NULL,
	[updated_utc] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_employee_id] PRIMARY KEY CLUSTERED 
(
	[employee_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO



ALTER TABLE [dbo].[employee]  WITH CHECK ADD  CONSTRAINT [FK_employee_office_id] FOREIGN KEY([office_id])
REFERENCES [dbo].[office] ([office_id])
GO

ALTER TABLE [dbo].[employee] CHECK CONSTRAINT [FK_employee_office_id]
GO

ALTER TABLE [dbo].[employee]  WITH CHECK ADD  CONSTRAINT [FK_employee_position_id] FOREIGN KEY([position_id])
REFERENCES [dbo].[position] ([position_id])
GO

ALTER TABLE [dbo].[employee] CHECK CONSTRAINT [FK_employee_position_id]
GO
