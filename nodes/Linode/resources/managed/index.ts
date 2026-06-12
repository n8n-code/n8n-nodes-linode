import type { INodeProperties } from 'n8n-workflow';

export const managedDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					]
				}
			},
			"options": [
				{
					"name": "Get Managed Contacts",
					"value": "Get Managed Contacts",
					"action": "Managed Contacts List",
					"description": "Returns a paginated list of Managed Contacts on your Account.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/managed/contacts"
						}
					}
				},
				{
					"name": "Create Managed Contact",
					"value": "Create Managed Contact",
					"action": "Managed Contact Create",
					"description": "Creates a Managed Contact.  A Managed Contact is someone Linode\nspecial forces can contact in the course of attempting to resolve an issue\nwith a Managed Service.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/managed/contacts"
						}
					}
				},
				{
					"name": "Delete Managed Contact",
					"value": "Delete Managed Contact",
					"action": "Managed Contact Delete",
					"description": "Deletes a Managed Contact.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/managed/contacts/{{$parameter[\"contactId\"]}}"
						}
					}
				},
				{
					"name": "Get Managed Contact",
					"value": "Get Managed Contact",
					"action": "Managed Contact View",
					"description": "Returns a single Managed Contact.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/managed/contacts/{{$parameter[\"contactId\"]}}"
						}
					}
				},
				{
					"name": "Update Managed Contact",
					"value": "Update Managed Contact",
					"action": "Managed Contact Update",
					"description": "Updates information about a Managed Contact.\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/managed/contacts/{{$parameter[\"contactId\"]}}"
						}
					}
				},
				{
					"name": "Get Managed Credentials",
					"value": "Get Managed Credentials",
					"action": "Managed Credentials List",
					"description": "Returns a paginated list of Managed Credentials on your Account.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/managed/credentials"
						}
					}
				},
				{
					"name": "Create Managed Credential",
					"value": "Create Managed Credential",
					"action": "Managed Credential Create",
					"description": "Creates a Managed Credential. A Managed Credential is stored securely\nto allow Linode special forces to access your Managed Services and resolve\nissues.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/managed/credentials"
						}
					}
				},
				{
					"name": "View Managed SSH Key",
					"value": "View Managed SSH Key",
					"action": "Managed SSH Key View",
					"description": "Returns the unique SSH public key assigned to your Linode account's\nManaged service. If you [add this public key](/docs/guides/linode-managed/#adding-the-public-key) to a Linode on your account,\nLinode special forces will be able to log in to the Linode with this key\nwhen attempting to resolve issues.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/managed/credentials/sshkey"
						}
					}
				},
				{
					"name": "Get Managed Credential",
					"value": "Get Managed Credential",
					"action": "Managed Credential View",
					"description": "Returns a single Managed Credential.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/managed/credentials/{{$parameter[\"credentialId\"]}}"
						}
					}
				},
				{
					"name": "Update Managed Credential",
					"value": "Update Managed Credential",
					"action": "Managed Credential Update",
					"description": "Updates the label of a Managed Credential. This endpoint does not update the username and password for a Managed Credential. To do this, use the Managed Credential Username and Password Update ([POST /managed/credentials/{credentialId}/update](/docs/api/managed/#managed-credential-username-and-password-update)) endpoint instead.\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/managed/credentials/{{$parameter[\"credentialId\"]}}"
						}
					}
				},
				{
					"name": "Delete Managed Credential",
					"value": "Delete Managed Credential",
					"action": "Managed Credential Delete",
					"description": "Deletes a Managed Credential.  Linode special forces will no longer\nhave access to this Credential when attempting to resolve issues.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/managed/credentials/{{$parameter[\"credentialId\"]}}/revoke"
						}
					}
				},
				{
					"name": "Update Managed Credential Username Password",
					"value": "Update Managed Credential Username Password",
					"action": "Managed Credential Username and Password Update",
					"description": "Updates the username and password for a Managed Credential.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/managed/credentials/{{$parameter[\"credentialId\"]}}/update"
						}
					}
				},
				{
					"name": "Get Managed Issues",
					"value": "Get Managed Issues",
					"action": "Managed Issues List",
					"description": "Returns a paginated list of recent and ongoing issues detected on your\nManaged Services.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/managed/issues"
						}
					}
				},
				{
					"name": "Get Managed Issue",
					"value": "Get Managed Issue",
					"action": "Managed Issue View",
					"description": "Returns a single Issue that is impacting or did impact one of your\nManaged Services.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/managed/issues/{{$parameter[\"issueId\"]}}"
						}
					}
				},
				{
					"name": "Get Managed Linode Settings",
					"value": "Get Managed Linode Settings",
					"action": "Managed Linode Settings List",
					"description": "Returns a paginated list of Managed Settings for your Linodes. There will\nbe one entry per Linode on your Account.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/managed/linode-settings"
						}
					}
				},
				{
					"name": "Get Managed Linode Setting",
					"value": "Get Managed Linode Setting",
					"action": "Linode's Managed Settings View",
					"description": "Returns a single Linode's Managed settings.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/managed/linode-settings/{{$parameter[\"linodeId\"]}}"
						}
					}
				},
				{
					"name": "Update Managed Linode Setting",
					"value": "Update Managed Linode Setting",
					"action": "Linode's Managed Settings Update",
					"description": "Updates a single Linode's Managed settings.\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/managed/linode-settings/{{$parameter[\"linodeId\"]}}"
						}
					}
				},
				{
					"name": "Get Managed Services",
					"value": "Get Managed Services",
					"action": "Managed Services List",
					"description": "Returns a paginated list of Managed Services on your Account. These\nare the services Linode Managed is monitoring and will report and attempt\nto resolve issues with.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/managed/services"
						}
					}
				},
				{
					"name": "Create Managed Service",
					"value": "Create Managed Service",
					"action": "Managed Service Create",
					"description": "Creates a Managed Service. Linode Managed will begin monitoring this\nservice and reporting and attempting to resolve any Issues.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/managed/services"
						}
					}
				},
				{
					"name": "Delete Managed Service",
					"value": "Delete Managed Service",
					"action": "Managed Service Delete",
					"description": "Deletes a Managed Service.  This service will no longer be monitored by\nLinode Managed.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/managed/services/{{$parameter[\"serviceId\"]}}"
						}
					}
				},
				{
					"name": "Get Managed Service",
					"value": "Get Managed Service",
					"action": "Managed Service View",
					"description": "Returns information about a single Managed Service on your Account.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/managed/services/{{$parameter[\"serviceId\"]}}"
						}
					}
				},
				{
					"name": "Update Managed Service",
					"value": "Update Managed Service",
					"action": "Managed Service Update",
					"description": "Updates information about a Managed Service.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/managed/services/{{$parameter[\"serviceId\"]}}"
						}
					}
				},
				{
					"name": "Disable Managed Service",
					"value": "Disable Managed Service",
					"action": "Managed Service Disable",
					"description": "Temporarily disables monitoring of a Managed Service.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/managed/services/{{$parameter[\"serviceId\"]}}/disable"
						}
					}
				},
				{
					"name": "Enable Managed Service",
					"value": "Enable Managed Service",
					"action": "Managed Service Enable",
					"description": "Enables monitoring of a Managed Service.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/managed/services/{{$parameter[\"serviceId\"]}}/enable"
						}
					}
				},
				{
					"name": "Get Managed Stats",
					"value": "Get Managed Stats",
					"action": "Managed Stats List",
					"description": "Returns a list of Managed Stats on your Account in the form of x and y data points.\nYou can use these data points to plot your own graph visualizations. These stats\nreflect the last 24 hours of combined usage across all managed Linodes on your account\ngiving you a high-level snapshot of data for the following:\n\n\n* cpu\n* disk\n* swap\n* network in\n* network out\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/managed/stats"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /managed/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Contacts"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Contacts"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Contacts"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Contacts"
					]
				}
			}
		},
		{
			"displayName": "POST /managed/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "john.doe@example.org",
			"description": "The address to email this Contact to alert them of issues.\n",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "string",
			"default": "on-call",
			"description": "A grouping for this Contact. This is for display purposes only.\n",
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 567,
			"description": "This Contact's unique ID.\n",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "John Doe",
			"description": "The name of this Contact.\n",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "phone",
			"type": "json",
			"default": "{\n  \"primary\": \"123-456-7890\",\n  \"secondary\": null\n}",
			"description": "Information about how to reach this Contact by phone.\n",
			"routing": {
				"send": {
					"property": "phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "Updated",
			"name": "updated",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "When this Contact was last updated.\n",
			"routing": {
				"send": {
					"property": "updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "DELETE /managed/contacts/{contactId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Delete Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Delete Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "GET /managed/contacts/{contactId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "PUT /managed/contacts/{contactId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "john.doe@example.org",
			"description": "The address to email this Contact to alert them of issues.\n",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "string",
			"default": "on-call",
			"description": "A grouping for this Contact. This is for display purposes only.\n",
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 567,
			"description": "This Contact's unique ID.\n",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "John Doe",
			"description": "The name of this Contact.\n",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "phone",
			"type": "json",
			"default": "{\n  \"primary\": \"123-456-7890\",\n  \"secondary\": null\n}",
			"description": "Information about how to reach this Contact by phone.\n",
			"routing": {
				"send": {
					"property": "phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "Updated",
			"name": "updated",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "When this Contact was last updated.\n",
			"routing": {
				"send": {
					"property": "updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Contact"
					]
				}
			}
		},
		{
			"displayName": "GET /managed/credentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Credentials"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Credentials"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Credentials"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Credentials"
					]
				}
			}
		},
		{
			"displayName": "POST /managed/credentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Credential"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "s3cur3P@ssw0rd",
			"description": "The password to use when accessing the Managed Service.\n",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Credential"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "johndoe",
			"description": "The username to use when accessing the Managed Service.\n",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Credential"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Credential"
					]
				}
			}
		},
		{
			"displayName": "GET /managed/credentials/sshkey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"View Managed SSH Key"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"View Managed SSH Key"
					]
				}
			}
		},
		{
			"displayName": "GET /managed/credentials/{credentialId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Credential"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Credential"
					]
				}
			}
		},
		{
			"displayName": "PUT /managed/credentials/{credentialId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Credential"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 9991,
			"description": "This Credential's unique ID.\n",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Credential"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "prod-password-1",
			"description": "The unique label for this Credential. This is for display purposes only.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Credential"
					]
				}
			}
		},
		{
			"displayName": "Last Decrypted",
			"name": "last_decrypted",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "The date this Credential was last decrypted by a member of Linode special forces.\n",
			"routing": {
				"send": {
					"property": "last_decrypted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Credential"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Credential"
					]
				}
			}
		},
		{
			"displayName": "POST /managed/credentials/{credentialId}/revoke",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Delete Managed Credential"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Delete Managed Credential"
					]
				}
			}
		},
		{
			"displayName": "POST /managed/credentials/{credentialId}/update",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Credential Username Password"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "s3cur3P@ssw0rd",
			"description": "The password to use when accessing the Managed Service.\n",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Credential Username Password"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "johndoe",
			"description": "The username to use when accessing the Managed Service.\n",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Credential Username Password"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Credential Username Password"
					]
				}
			}
		},
		{
			"displayName": "GET /managed/issues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Issues"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Issues"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Issues"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Issues"
					]
				}
			}
		},
		{
			"displayName": "GET /managed/issues/{issueId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Issue"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Issue"
					]
				}
			}
		},
		{
			"displayName": "GET /managed/linode-settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Linode Settings"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Linode Settings"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Linode Settings"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Linode Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /managed/linode-settings/{linodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Linode Setting"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Linode Setting"
					]
				}
			}
		},
		{
			"displayName": "PUT /managed/linode-settings/{linodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Linode Setting"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "string",
			"default": "linodes",
			"description": "The group of the Linode these Settings are for. This is for display purposes only.\n",
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Linode Setting"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 123,
			"description": "The ID of the Linode these Settings are for.\n",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Linode Setting"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "linode123",
			"description": "The label of the Linode these Settings are for.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Linode Setting"
					]
				}
			}
		},
		{
			"displayName": "SSH",
			"name": "ssh",
			"type": "json",
			"default": "{\n  \"access\": true,\n  \"ip\": \"203.0.113.1\",\n  \"port\": 22,\n  \"user\": \"linode\"\n}",
			"description": "The SSH settings for this Linode.\n",
			"routing": {
				"send": {
					"property": "ssh",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Linode Setting"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Linode Setting"
					]
				}
			}
		},
		{
			"displayName": "GET /managed/services",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Services"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Services"
					]
				}
			}
		},
		{
			"displayName": "POST /managed/services",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "https://example.org",
			"description": "The URL at which this Service is monitored.\n\nURL parameters such as `?no-cache=1` are preserved.\n\nURL fragments/anchors such as `#monitor` are **not** preserved.\n",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "it worked",
			"description": "What to expect to find in the response body for the Service to be considered up.\n",
			"routing": {
				"send": {
					"property": "body",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Consultation Group",
			"name": "consultation_group",
			"type": "string",
			"default": "on-call",
			"description": "The group of ManagedContacts who should be notified or consulted with when an Issue is detected.\n",
			"routing": {
				"send": {
					"property": "consultation_group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "When this Managed Service was created.",
			"routing": {
				"send": {
					"property": "created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Credentials",
			"name": "credentials",
			"type": "json",
			"default": "[\n  9991\n]",
			"description": "An array of ManagedCredential IDs that should be used when attempting to resolve issues with this Service.\n",
			"routing": {
				"send": {
					"property": "credentials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Service"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 9944,
			"description": "This Service's unique ID.\n",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "prod-1",
			"description": "The label for this Service. This is for display purposes only.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "string",
			"default": "The service name is my-cool-application",
			"description": "Any information relevant to the Service that Linode special forces should know when attempting to resolve Issues.\n",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Region",
			"name": "region",
			"type": "string",
			"default": null,
			"description": "The Region in which this Service is located. This is required if address is a private IP, and may not be set otherwise.\n",
			"routing": {
				"send": {
					"property": "region",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Service Type",
			"name": "service_type",
			"type": "options",
			"default": "url",
			"description": "How this Service is monitored.\n",
			"options": [
				{
					"name": "URL",
					"value": "url"
				},
				{
					"name": "Tcp",
					"value": "tcp"
				}
			],
			"routing": {
				"send": {
					"property": "service_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "ok",
			"description": "The current status of this Service.\n",
			"options": [
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Pending",
					"value": "pending"
				},
				{
					"name": "Ok",
					"value": "ok"
				},
				{
					"name": "Problem",
					"value": "problem"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Timeout",
			"name": "timeout",
			"type": "number",
			"default": 30,
			"description": "How long to wait, in seconds, for a response before considering the Service to be down.\n",
			"routing": {
				"send": {
					"property": "timeout",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Updated",
			"name": "updated",
			"type": "string",
			"default": "2018-03-01T00:01:01",
			"description": "When this Managed Service was last updated.",
			"routing": {
				"send": {
					"property": "updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Create Managed Service"
					]
				}
			}
		},
		{
			"displayName": "DELETE /managed/services/{serviceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Delete Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Delete Managed Service"
					]
				}
			}
		},
		{
			"displayName": "GET /managed/services/{serviceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Service"
					]
				}
			}
		},
		{
			"displayName": "PUT /managed/services/{serviceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "https://example.org",
			"description": "The URL at which this Service is monitored.\n\nURL parameters such as `?no-cache=1` are preserved.\n\nURL fragments/anchors such as `#monitor` are **not** preserved.\n",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "it worked",
			"description": "What to expect to find in the response body for the Service to be considered up.\n",
			"routing": {
				"send": {
					"property": "body",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Consultation Group",
			"name": "consultation_group",
			"type": "string",
			"default": "on-call",
			"description": "The group of ManagedContacts who should be notified or consulted with when an Issue is detected.\n",
			"routing": {
				"send": {
					"property": "consultation_group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "When this Managed Service was created.",
			"routing": {
				"send": {
					"property": "created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Credentials",
			"name": "credentials",
			"type": "json",
			"default": "[\n  9991\n]",
			"description": "An array of ManagedCredential IDs that should be used when attempting to resolve issues with this Service.\n",
			"routing": {
				"send": {
					"property": "credentials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Service"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 9944,
			"description": "This Service's unique ID.\n",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "prod-1",
			"description": "The label for this Service. This is for display purposes only.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "string",
			"default": "The service name is my-cool-application",
			"description": "Any information relevant to the Service that Linode special forces should know when attempting to resolve Issues.\n",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Region",
			"name": "region",
			"type": "string",
			"default": null,
			"description": "The Region in which this Service is located. This is required if address is a private IP, and may not be set otherwise.\n",
			"routing": {
				"send": {
					"property": "region",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Service Type",
			"name": "service_type",
			"type": "options",
			"default": "url",
			"description": "How this Service is monitored.\n",
			"options": [
				{
					"name": "URL",
					"value": "url"
				},
				{
					"name": "Tcp",
					"value": "tcp"
				}
			],
			"routing": {
				"send": {
					"property": "service_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "ok",
			"description": "The current status of this Service.\n",
			"options": [
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Pending",
					"value": "pending"
				},
				{
					"name": "Ok",
					"value": "ok"
				},
				{
					"name": "Problem",
					"value": "problem"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Timeout",
			"name": "timeout",
			"type": "number",
			"default": 30,
			"description": "How long to wait, in seconds, for a response before considering the Service to be down.\n",
			"routing": {
				"send": {
					"property": "timeout",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Updated",
			"name": "updated",
			"type": "string",
			"default": "2018-03-01T00:01:01",
			"description": "When this Managed Service was last updated.",
			"routing": {
				"send": {
					"property": "updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Update Managed Service"
					]
				}
			}
		},
		{
			"displayName": "POST /managed/services/{serviceId}/disable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Disable Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Disable Managed Service"
					]
				}
			}
		},
		{
			"displayName": "POST /managed/services/{serviceId}/enable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Enable Managed Service"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Enable Managed Service"
					]
				}
			}
		},
		{
			"displayName": "GET /managed/stats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Stats"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed"
					],
					"operation": [
						"Get Managed Stats"
					]
				}
			}
		},
];
