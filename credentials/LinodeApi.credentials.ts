import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class LinodeApi implements ICredentialType {
        name = 'N8nDevLinodeApi';

        displayName = 'Linode API';

        icon: Icon = { light: 'file:../nodes/Linode/linode.svg', dark: 'file:../nodes/Linode/linode.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.linode.com/v4',
                        required: true,
                        placeholder: 'https://api.linode.com/v4',
                        description: 'The base URL of your Linode API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
