/****** Object:  Table [dbo].[office]    Script Date: 6/25/2018 3:40:32 PM ******/






CREATE TABLE [dbo].[office](
	[office_id] [int] IDENTITY(1,1) NOT NULL,
	[office] [nvarchar](100) NOT NULL,
	[updated_utc] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_office_id] PRIMARY KEY CLUSTERED 
(
	[office_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]


