BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [email] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [displayname] NVARCHAR(1000),
    [provider] NVARCHAR(1000),
    [genderId] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [User_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2,
    [isActive] BIT NOT NULL CONSTRAINT [User_isActive_df] DEFAULT 1,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Role] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Role_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2,
    [isActive] BIT NOT NULL CONSTRAINT [Role_isActive_df] DEFAULT 1,
    CONSTRAINT [Role_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[RoleForUser] (
    [id] INT NOT NULL IDENTITY(1,1),
    [userId] INT NOT NULL,
    [roleId] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [RoleForUser_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2,
    [isActive] BIT NOT NULL CONSTRAINT [RoleForUser_isActive_df] DEFAULT 1,
    CONSTRAINT [RoleForUser_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Gender] (
    [id] INT NOT NULL IDENTITY(1,1),
    [type] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Gender_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2,
    [isActive] BIT NOT NULL CONSTRAINT [Gender_isActive_df] DEFAULT 1,
    CONSTRAINT [Gender_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Person] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000),
    [phone] NVARCHAR(1000),
    [address] NVARCHAR(1000) NOT NULL,
    [dateOfbirthday] DATETIME2 NOT NULL,
    [genderId] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Person_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2,
    [isActive] BIT NOT NULL CONSTRAINT [Person_isActive_df] DEFAULT 1,
    CONSTRAINT [Person_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Receipt] (
    [id] INT NOT NULL IDENTITY(1,1),
    [drug] NVARCHAR(1000),
    [name] NVARCHAR(1000),
    [dose] NVARCHAR(1000),
    [freq] NVARCHAR(1000),
    [route] NVARCHAR(1000),
    [note] NVARCHAR(1000),
    [userId] INT,
    [personId] INT,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Receipt_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2,
    [isActive] BIT NOT NULL CONSTRAINT [Receipt_isActive_df] DEFAULT 1,
    CONSTRAINT [Receipt_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[_PersonToUser] (
    [A] INT NOT NULL,
    [B] INT NOT NULL,
    CONSTRAINT [_PersonToUser_AB_unique] UNIQUE NONCLUSTERED ([A],[B])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [_PersonToUser_B_index] ON [dbo].[_PersonToUser]([B]);

-- AddForeignKey
ALTER TABLE [dbo].[User] ADD CONSTRAINT [User_genderId_fkey] FOREIGN KEY ([genderId]) REFERENCES [dbo].[Gender]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[RoleForUser] ADD CONSTRAINT [RoleForUser_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[RoleForUser] ADD CONSTRAINT [RoleForUser_roleId_fkey] FOREIGN KEY ([roleId]) REFERENCES [dbo].[Role]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Person] ADD CONSTRAINT [Person_genderId_fkey] FOREIGN KEY ([genderId]) REFERENCES [dbo].[Gender]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Receipt] ADD CONSTRAINT [Receipt_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Receipt] ADD CONSTRAINT [Receipt_personId_fkey] FOREIGN KEY ([personId]) REFERENCES [dbo].[Person]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_PersonToUser] ADD CONSTRAINT [_PersonToUser_A_fkey] FOREIGN KEY ([A]) REFERENCES [dbo].[Person]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_PersonToUser] ADD CONSTRAINT [_PersonToUser_B_fkey] FOREIGN KEY ([B]) REFERENCES [dbo].[User]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
